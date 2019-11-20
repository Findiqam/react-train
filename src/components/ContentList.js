import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; 

import styles from './styles'
import Loading from './Loading';
import Card from './Card';

//内容列表
class ContentList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            items: []
        };
    }
    componentDidMount() {
        this.search();
    }
    componentDidUpdate (prevProps) {
        if (this.props.query != prevProps.query) {
            this.search();
        }
    }
    search = async () => {
        const {query} = this.props;
        const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories`;
        this.setState({ loading: true })
        try {
            const res = await axios.get(url)
            this.setState({
                items: res.data.items
            })
        } catch (e) {
            
        }
        this.setState({ loading: false });
    }
    render() {
        const { items, loading } = this.state;
        const {islight}=this.props;
        const cards = items.map((item, key) =>
            <Card key={key} source={item} index={key + 1} islight={islight}></Card>
        );
        return (
            <ul style={styles.grid}>
                {loading ? <Loading></Loading> : cards}
            </ul>
        );
    }
}
export default ContentList;
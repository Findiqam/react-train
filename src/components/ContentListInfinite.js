import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; 
import InfiniteScroll from 'react-infinite-scroller';

import styles from './styles'
import Loading from './Loading';
import Card from './Card';

//内容列表
class ContentListInfinite extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasMore:true,
            pageNum:1,
            pageEnd:3,
            items: []
        };
    }
    componentDidMount() {
        
    }
    componentDidUpdate (prevProps) {
        if (this.props.query != prevProps.query) {
            this.setState({
                items: [],
                pageNum: 1,
                hasMore: true  
            });
        }
    }
    search = async () => {
        const {query} = this.props;
        const {hasMore,pageNum,pageEnd,items}=this.state;
        if(pageNum>pageEnd){
            this.setState({
                hasMore:false
            });
            return;
        }   
        const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories&page=${pageNum}`;
        try {
            const res = await axios.get(url);
            this.setState({
                items: items.concat(res.data.items) 
            })
            
        } catch (e) {
            
        }
        this.setState({
            pageNum:pageNum+1,
        })
    }
    render() {
        const {hasMore,pageNum,pageEnd,items} = this.state;
        const {islight}=this.props;
        const cards = items.map((item, key) =>
            <Card key={key} source={item} index={key + 1} islight={islight}></Card>
        );
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={()=>this.search()}
                hasMore={hasMore}
                loader={<div className="loader" key={0}><Loading></Loading></div>}
            >
                <ul style={styles.grid}>
                    {cards}
                </ul>
            </InfiniteScroll>
        );
    }
}
export default ContentListInfinite;
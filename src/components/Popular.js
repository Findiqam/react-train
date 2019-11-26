import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios'; 

import Loading from './Loading';
import Card from './Card';
import styles from './styles'

//分类菜单
class Menu extends React.Component{
    
    render() {
        const {onClick,current}=this.props;
        const links = [
            {
                title: 'All',
                query: 'stars:>1'
            },
            {
                title: 'JavaScript',
                query: 'stars:>1+language:javascript'
            },
            {
                title: 'Ruby',
                query: 'stars:>1+language:ruby'
            },
            {
                title: 'Java',
                query: 'stars:>1+language:java'
            },
            {
                title: 'CSS',
                query: 'stars:>1+language:css'
            }
        ];
        const link=links.map((item,key)=><li style={styles.li} key={key}><button onClick={() => onClick(item.query)} style={current == item.query ? styles.btnActive:styles.btnDefault}>{item.title}</button></li>);
        return (
            <ul style={styles.ul}>
                {link}
            </ul>
        );
    }
}
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
//内容部分
class Popular extends React.Component{
    constructor(props) {
        super(props)
        this.state = { query: 'stars:>1' };
    }
    onClick=(query)=>{
        this.setState({
            query
        })
    }
    render(){
        const {query}=this.state;
        const {islight}=this.props;
        return(
            <div>
                <Menu onClick={this.onClick} current={query}></Menu>
                <ContentListInfinite query={query} islight={islight}></ContentListInfinite>
            </div>
        )
    }
}

export default Popular;
const styles={
    light:{
        minHeight: '100%'
    },
    dark:{
        color: '#DADADA',
        background: '#1c2022',
        minHeight: '100%'
    },
    container:{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 50
    },
    nav:{
        padding:'0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnLight :{
        border: 'none',
        background: 'transparent',
        fontSize: '30px'
    },
    navUl:{
        display: 'flex',
        flexDirection: 'row',
        padding:'0px',
    },
    navLi:{
        marginRight: '10px',
        listStyleType: 'none'
    },
    navLink :{
        fontSize: '18px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'inherit'
    },
    active:{
        color: 'rgb(187, 46, 31)'
    },
    ul:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:0
    },
    li:{
        listStyleType: 'none'
    },
    btnDefault:{
        border:'none',
        background:'transparent',
        fontSize:'18px',
        fontWeight:'bold',
        textDecoration: 'none',
        color: 'inherit',
    },
    btnActive:{
        border:'none',
        background:'transparent',
        fontSize:'18px',
        fontWeight:'bold',
        textDecoration: 'none',
        color: 'rgb(187, 46, 31)',
    },
    cradLight:{
        display:'block',
        margin:'10px 0',
        width:'250px',
        padding:'20px',
        background:'rgba(0, 0, 0, 0.08)',
        borderRadius:'3px'
    },
    cradDark:{
        display:'block',
        margin:'10px 0',
        width:'250px',
        padding:'20px',
        background:'rgb(36, 40, 42)',
        borderRadius:'3px'
    },
    Ranking:{
        textAlign:'center',
        fontSize:'35px',
        fontWeight: '300',
        margin: '20px',
        display: 'block',
        marginBlockStart: '20pz',
        marginBlockEnd: '20pz',
        marginInlineStart: '0px',
        marginISnlineEnd: '0px'
    },
    cardImg:{
        marginBottom: '8px',
        width: '150px',
        height: '150px',
        borderRadius: '3px',
        margin: '0 auto',
        display: 'block'
    },
    cardTitle:{
        textAlign: 'center',
        display: 'block',
        fontSize: '1.5em',
        marginBlockStart: '0.83em',
        marginBlockEnd: '0.83em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        fontWeight: 'bold',
    },
    cardA:{
        textDecoration: 'none'
    },
    cardLink:{
        color:' rgb(187, 46, 31)',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    cardList:{
        margin: '20px 0',
        fontSize: '20px',
    },
    cardListLi:{
        display: 'flex',
        alignItems: 'center',
        margin: '10px',
    },
    cardMan:{
        position: 'relative',
        display: 'flex',
    },
    icon:{
        fontSize:'22px',
        width:'22px',
        height:'22px',
        marginRight:'10px'
    },
    cardListA:{
        fontWeight: '500',
        color: 'inherit',
    },
    center: {
        textAlign: 'center'
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
};
//头部的链接：Popular Battle
class LinkList extends React.Component {
    render() {      
        return (
            <ul style={styles.navUl}>
                <li style={styles.navLi}>
                    <a style={{ ...styles.navLink, ...styles.active }} href="/">Popular</a>
                </li>
                <li style={styles.navLi}>
                    <a style={styles.navLink} href="./Battle.html">Battle</a>
                </li>
            </ul>
        );
    }
}
//头部的灯开关
class Light extends React.Component{
    render(){
        const {onClick,islight}=this.props;
        return(
            <button style={styles.btnLight} onClick={onClick}>{islight ? '🔦' : '💡'}</button>
        )
    }
}
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
        const link=links.map((item,key)=><li style={styles.li}><button onClick={() => onClick(item.query)} style={current == item.query ? styles.btnActive:styles.btnDefault}>{item.title}</button></li>);
        return (
            <ul style={styles.ul}>
                {link}
            </ul>
        );
    }
}
//展示卡片
class Card extends React.Component{
    render() {
        const {index,source,islight}=this.props;
        if(!source){
            return <div>没有卡片</div>;
        }
        return (
            <div style={islight?styles.cradLight:styles.cradDark}>
                <h4 style={styles.Ranking}>#{index}</h4>
                <img src={source.owner.avatar_url} alt={source.name} style={styles.cardImg} />
                <h2 style={styles.cardTitle}>
                    <a href={source.html_url} style={{...styles.cardLink,...styles.cardA}} target="_blank">
                        {source.owner.login}
                    </a>
                </h2>
                <ul style={styles.cardList}>
                    <li style={styles.cardListLi}>
                        <div>
                            <div style={styles.cardMan}>
                                <i class="fa fa-user fa-fw" style={{...styles.icon,color:'rgb(255, 191, 116)'}}></i>
                                <a href={source.owner.html_url} target="_blank" style={{...styles.cardListA,...styles.cardA}}>
                                {source.owner.login}
                                </a>
                            </div>
                        </div>
                    </li>
                    <li style={styles.cardListLi}>
                        <i class="fa fa-star fa-fw" style={{...styles.icon,color:'rgb(255, 215, 0)'}}></i>
                        {source.stargazers_count} stars
                    </li>
                    <li style={styles.cardListLi}>
                        <i class="fa fa-code-fork fa-fw" style={{...styles.icon,color:'rgb(129, 195, 245)'}}></i>
                        {source.forks} forks
                    </li>
                    <li style={styles.cardListLi}>
                        <i class="fa fa-warning fa-fw" style={{...styles.icon,color:'rgb(241, 138, 147)'}}></i>
                        {source.open_issues} Open issues
                    </li>
                </ul>
            </div>
        );
    }
}
class Loading extends React.Component {
    render() {
        return <div style={styles.center}>
            正在加载<i class="fa fa-spinner fa-spin"></i>
        </div>;
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
        console.log('url', url);
        this.setState({ loading: true })
        try {
            const res = await axios.get(url)
            console.log('res', res.data)
            this.setState({
                items: res.data.items
            })
        } catch (e) {
            console.log('error', e)
        }
        this.setState({ loading: false });
    }
    render() {
        const { items, loading } = this.state;
        const {islight}=this.props;
        const cards = items.map((item, key) =>
            <Card key={key} source={item} index={key + 1} islight={islight}></Card>
        );
        return <ul style={styles.grid}>
            {loading ? <Loading></Loading> : cards}
        </ul>;
    }
}
//头部
class Header extends React.Component{
    render(){
        const {onClick,islight}=this.props;
        return(
            <nav style={styles.nav}>
                <LinkList />
                <Light onClick={onClick} islight={islight}></Light>
            </nav>
        )
    }
}
//内容部分
class Content extends React.Component{
    constructor(props) {
        super(props)
        this.state = { query: 'stars:>1' };
    }
    onClick=(query)=>{
        console.log('query', query)
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
                <ContentList query={query} islight={islight}></ContentList>
            </div>
        )
    }
}
//脚部
class Footer extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}
//App
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {islight:true };
    }
    lightClick=()=>{
        this.setState(state => ({
            islight: !state.islight
        }));
    }
    render() {
        const {islight}=this.state;
        return (
            <div style={islight ? styles.light : styles.dark}>
                <div style={styles.container}>
                    <Header onClick={this.lightClick} islight={islight}></Header>
                    <Content islight={islight}></Content>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
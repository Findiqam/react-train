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
export default styles;
export default () => ({
    isLoading: true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Minim askjfla asdfja sfofjsldfkjoq  sjfoasjdf lasfjal fo aslfjalsf f fjalskdfjoier fjasdfkl', 
            picture: null,
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'heie lsdfj sldfjs i sldfjks ldfosdf sdfjlslfj', 
            picture: null,
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'as askjfla assdfsdfja sfofjsldfsdfsdkjoq  sjfoasjdf lasfjal fo aslfjalssdff f fjalskdfjoier fjasdfkl', 
            picture: null,
        },
    ]
})
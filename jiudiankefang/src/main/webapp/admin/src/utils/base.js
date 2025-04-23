const base = {
    get() {
        return {
            url : "http://localhost:8080/jiudiankefang/",
            name: "jiudiankefang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiudiankefang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "酒店客房管理系统"
        } 
    }
}
export default base

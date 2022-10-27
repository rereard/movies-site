import ReactLoading from "react-loading";
const Loading = () => {
    return(
        <div className="bg-gray-800 rounded-lg flex items-center justify-center">
            <ReactLoading type="spin" color="#fff" height={100} width={100}/>
        </div>
    )
}
export default Loading
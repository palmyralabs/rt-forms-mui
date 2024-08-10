import { CircularProgress } from "@mui/material";

const LoadingChild = () => {
    return (
        <div  className='plr-loading-container'>
            <CircularProgress size={25} thickness={4} />
            <span>Loading Data...</span>
        </div>
    )
}

export default LoadingChild

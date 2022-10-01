import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
    return (
      <ProgressBar
        height="120"
        width="480"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#f2f7fd75"
        barColor="#405058fd"
      />
    );
}


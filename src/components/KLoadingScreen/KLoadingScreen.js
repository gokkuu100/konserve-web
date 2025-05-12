const LoadingK = () => {
    return (
      <div className="loading-container">
        <svg
          viewBox="0 0 100 100"
          width="150"
          height="150"
          className="loading-svg"
        >
          <path
            d="M10 10 L10 90 L60 50 L10 10 L90 10 L60 50 L90 90"
            fill="none"
            stroke="#00ff88"
            strokeWidth="4"
            strokeLinecap="round"
            className="loading-path"
          />
        </svg>
      </div>
    );
  };
  
  export default LoadingK;
  
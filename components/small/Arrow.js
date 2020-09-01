const Arrow = () => {
  return (
    <div className="arrow">
      <span></span>
      <span></span>
      <span></span>
      <style jsx>{`
        .arrow {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100px;
          padding-bottom: 50px;
        }
        .arrow span {
          display: block;
          width: 30px;
          height: 30px;
          border-bottom: 2px solid #3dd7ac;
          border-right: 2px solid #3dd7ac;
          transform: rotate(45deg);
          margin: -10px;
          animation: animate 2s infinite;
        }
        .arrow span:nth-child(2) {
          animation-delay: -0.2s;
        }
        .arrow span:nth-child(3) {
          animation-delay: -0.4s;
        }
        @keyframes animate {
          0% {
            opacity: 0;
            transform: rotate(45deg) translate(-20px, -20px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(45deg) translate(20px, 20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Arrow;

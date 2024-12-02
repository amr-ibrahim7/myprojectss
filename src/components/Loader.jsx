import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center">
        {/* Roof */}
        <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[20px] border-b-primary"></div>

        {/* Walls */}
        <div className="w-20 h-20 bg-card border-2 border-border relative rotate-animation">
          {/* Door */}
          <div className="w-8 h-12 bg-secondary border-2 border-border absolute bottom-0 left-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

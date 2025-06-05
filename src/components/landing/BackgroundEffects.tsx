export default function BackgroundEffects() {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[500px] -left-[400px] w-[1000px] h-[1000px] rounded-full bg-purple-100/70 blur-[100px] animate-pulse-slow" />
        <div className="absolute -bottom-[400px] -right-[400px] w-[800px] h-[800px] rounded-full bg-purple-200/50 blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-purple-300/30 blur-[80px] animate-pulse-medium" />
      </div>
    );
  }
import React from "react";

// Define props interface with proper types
interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

// Option 1: Explicit type annotation on parameter (most clear)
const Card = ({
  title,
  description,
  icon,
  className = '',
}: CardProps) => {
  return (
    <div
      className={`group bg-zinc-900 border border-zinc-800 rounded-xl p-6 
                  hover:border-amber-600 hover:shadow-lg hover:shadow-amber-600/10 
                  transition-all duration-300 ${className}`}
    >
      {icon && (
        <div className="mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3
        className="text-xl font-semibold text-white mb-3 
                   group-hover:text-amber-500 transition-colors"
      >
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;
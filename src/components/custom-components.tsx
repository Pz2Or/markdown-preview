import React from "react";
import Image from "next/image";
interface CustomComponentProps {
    children: React.ReactNode;
}

export const CustomH1 = ({ children }: CustomComponentProps) => (
    <h1 className="text-3xl font-bold flex flex-row mt-8">
        <div className="text-gray-300 mr-2">#</div>
        {children}
    </h1>
);

export const CustomH2 = ({ children }: CustomComponentProps) => (
    <h2 className="text-2xl font-semibold flex flex-row mt-7">
        <div className="text-gray-300 mr-2">##</div>
        {children}
    </h2>
);

export const CustomH3 = ({ children }: CustomComponentProps) => (
    <h3 className="text-xl font-medium flex flex-row mt-6">
        <div className="text-gray-300 mr-2">###</div>
        {children}
    </h3>
);

export const CustomP = ({ children }: CustomComponentProps) => (
    <div className="text-base my-2">{children}</div>
);

export const CustomUl = ({ children }: CustomComponentProps) => (
    <ul className="list-disc list-inside my-2">{children}</ul>
);

export const CustomOl = ({ children }: CustomComponentProps) => (
    <ol className="list-decimal list-inside my-2">{children}</ol>
);

export const CustomLi = ({ children }: CustomComponentProps) => (
    <li className="ml-4">{children}</li>
);

export const CustomBlockquote = ({ children }: CustomComponentProps) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
    </blockquote>
);

export const CustomCode = ({ children }: CustomComponentProps) => (
    <code className="bg-gray-700 rounded px-1">{children}</code>
);

export const CustomPre = ({ children }: CustomComponentProps) => (
    <pre className="bg-gray-100 rounded p-2 my-2 overflow-x-auto">
        {children}
    </pre>
);

export const CustomImg: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (
    props
) => (
    <Image
        src={props.src as string}
        alt={props.alt as string}
        className="max-w-full h-auto my-4"
    />
);

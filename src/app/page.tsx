"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Card } from "@/components/ui/card";
import {
    CustomH1,
    CustomH2,
    CustomH3,
    CustomP,
    CustomUl,
    CustomOl,
    CustomLi,
    CustomBlockquote,
    CustomCode,
    CustomPre,
    CustomImg,
} from "@/components/custom-components";
import { CustomLink } from "@/components/custom-link";

export default function MarkdownPreviewer() {
    const [markdown, setMarkdown] = useState(
        "# Welcome to Markdown Previewer\n\nStart typing in the left panel to see the preview on the right."
    );

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Markdown Previewer
            </h1>
            <div className="flex flex-col lg:flex-row gap-6">
                <Card className="flex-1 p-4 shadow-sm">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">
                        Input
                    </h2>
                    <textarea
                        className="w-full h-[calc(100vh-200px)] p-3 text-sm bg-white border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={markdown}
                        onChange={(e) => setMarkdown(e.target.value)}
                        placeholder="Type your Markdown here..."
                    />
                </Card>
                <Card className="flex-1 p-4 shadow-sm">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">
                        Preview
                    </h2>
                    <div className="prose prose-sm max-w-none h-[calc(100vh-200px)] overflow-auto bg-white p-3 rounded-md">
                        <ReactMarkdown
                            components={{
                                h1: CustomH1,
                                h2: CustomH2,
                                h3: CustomH3,
                                p: CustomP,
                                ul: CustomUl,
                                ol: CustomOl,
                                li: CustomLi,
                                blockquote: CustomBlockquote,
                                code: CustomCode,
                                pre: CustomPre,
                                img: CustomImg,
                                a: CustomLink,
                            }}
                        >
                            {markdown}
                        </ReactMarkdown>
                    </div>
                </Card>
            </div>
        </div>
    );
}

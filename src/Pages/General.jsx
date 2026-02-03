import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

const General = ({ category, news, isLoading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isPaginationLoading, setIsPaginationLoading] = useState(false);
    const itemsPerPage = 12;

    useEffect(() => {
        setCurrentPage(1);
    }, [category]);

    const totalPages = Math.ceil(news.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = news.slice(startIndex, endIndex);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setIsPaginationLoading(true);
            setTimeout(() => {
                setCurrentPage(currentPage - 1);
                setIsPaginationLoading(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 500);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setIsPaginationLoading(true);
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
                setIsPaginationLoading(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 500);
        }
    };

    return (
        <div className="dark:bg-black dark:h-auto min-h-screen">
            <h2 className="text-2xl text-[#00bda6] dark:text-white   underline font-bold mx-10 my-5">
                {category.toUpperCase()} NEWS
            </h2>

            {isLoading || isPaginationLoading ? (
                <div className="flex items-center justify-center min-h-[60vh]">
                    <Loader />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-25 px-20 py-5 -mb-20">
                        {currentNews.length > 0 ? (
                            currentNews.map((result, index) => (
                                <Card key={`${result.url}-${index}`} props={result} />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-10">
                                No news available
                            </p>
                        )}
                    </div>

                    {news.length > 0 && (
                        <div className="flex items-center justify-center gap-4 mt-30 py-20">
                            <button
                                className={`px-4 py-2 rounded-lg mx-2 transition-all ${currentPage === 1
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-[#00bda6] text-white hover:bg-[#009688]'
                                    }`}
                                onClick={handlePrevious}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>

                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                className={`px-4 py-2 rounded-lg mx-2 transition-all ${currentPage === totalPages
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-[#00bda6] text-white hover:bg-[#009688]'
                                    }`}
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default General;

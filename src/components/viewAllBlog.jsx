import { useEffect, useMemo, useState } from "react"
import { apiGet } from "../services/apiRequestResponse"
import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Skeleton } from 'primereact/skeleton';
const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const pageSize=3;
  const [seletedBlogData, setSelectedBlogData] = useState([]);
  const [visible, setVisible] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    setCurrentPage(1);
    const getBlogData = async () => {
      try {
        const res = await apiGet("/blogdata");
        console.log(res);
        setBlogData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBlogData();
  }, []);
  function handleBlogOpen(e, data) {
    setSelectedBlogData([data]);
    setVisible(true);
  }
  const totalPages = Math.ceil(blogData.length / pageSize);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return {
      paginated1: blogData.slice(start, start + pageSize),
    };
  }, [blogData, currentPage, pageSize]);
  const goToPage = page => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  return (
    <section id="blog" className="py-16 px-6 md:px-8 lg:px-12">
      {seletedBlogData.length ? (
       <Dialog
  header={seletedBlogData[0].title}
  visible={visible}
 className="sm:w-[50vw] w-[80vw] max-w-[100%]"
  onHide={() => {
    if (!visible) return;
    setVisible(false);
  }}
>
  <div className="text-left">
    <img
      src={seletedBlogData[0].image}
      alt="Blog Post Image"
      className="w-full h-48 object-contain rounded-md mb-4 mt-3"
    />
  </div>
  <p className="m-0 break-words whitespace-pre-line text-gray-700">
    {seletedBlogData[0].content}
  </p>
</Dialog>

      ) : (
        <></>
      )}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Explore All Our Blog Posts
        </h2>
          {paginatedData.paginated1.length ? (
            <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <>
              {paginatedData.paginated1.map((data) => (
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
                  <img
                    src={data.image}
                    alt="Blog Post Image"
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {data.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {data.content}
                  </p>

                  <a
                    onClick={(e) => handleBlogOpen(e, data)}
                    className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </>
            </div>
            {totalPages > 1 && (
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={() => goToPage(currentPage - 1)}
                className="px-4 py-2 me-4 text-white bg-[#3A5B76] dark:bg-amber-600 rounded dark:hover:bg-amber-700 hover:bg-[#2D465B] disabled:opacity-80 disabled:bg-gray-400 disabled:hover:bg-gray-400"
                disabled={currentPage === 1}
                aria-label="Previous Page"
              >
                <FaCircleArrowLeft />
              </button>

              <span className="text-gray-700 dark:text-white">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => goToPage(currentPage + 1)}
                className="px-4 py-2 ms-4 text-white bg-[#3A5B76] dark:bg-amber-600 rounded dark:hover:bg-amber-700 hover:bg-[#2D465B] disabled:opacity-80 disabled:bg-gray-400 disabled:hover:bg-gray-400"
                disabled={currentPage === totalPages}
                aria-label="Next Page"
              >
               <FaCircleArrowRight />
              </button>
            </div>
          )}
            </div>
          ) : (
            <>
             <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
                  <Skeleton
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />
                  <Skeleton className="text-xl font-semibold text-gray-700 mb-2">
                  </Skeleton>
                  <Skeleton className="text-gray-600 text-sm mb-4 line-clamp-3">
                  </Skeleton>

                  <Skeleton
                    className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                  </Skeleton>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
                  <Skeleton
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />
                  <Skeleton className="text-xl font-semibold text-gray-700 mb-2">
                  </Skeleton>
                  <Skeleton className="text-gray-600 text-sm mb-4 line-clamp-3">
                  </Skeleton>

                  <Skeleton
                    className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                  </Skeleton>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
                  <Skeleton
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />
                  <Skeleton className="text-xl font-semibold text-gray-700 mb-2">
                  </Skeleton>
                  <Skeleton className="text-gray-600 text-sm mb-4 line-clamp-3">
                  </Skeleton>

                  <Skeleton
                    className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                  </Skeleton>
                </div>
            </>
            </div>
            <div className="flex justify-center items-center mt-4">
              <Skeleton className="text-gray-700 dark:text-white">
              </Skeleton>
            </div>      
            </div>
            </>
          )}
          {/* <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
          <img src="https://placehold.co/400x200/e2e8f0/4a5568?text=Blog+Image+2" alt="Blog Post Image" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Common English Pronunciation Mistakes</h3>
          <p className="text-gray-600 text-sm mb-4">Identify and correct common errors for clearer speaking.</p>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Read More →</a>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
          <img src="https://placehold.co/400x200/e0e7ff/4a5568?text=Blog+Image+3" alt="Blog Post Image" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Boost Your Business English Skills</h3>
          <p className="text-gray-600 text-sm mb-4">Strategies for effective communication in professional settings.</p>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Read More →</a>
        </div> */}
      </div>
    </section>
  );
};
export function ViewAllBlog(){
    const navigate=useNavigate();
    return(
        <>
        <header class="bg-indigo-700 sticky z-100 top-0 text-white shadow-md py-4 px-6 md:px-8 lg:px-12 rounded-b-lg">
        <div class="container flex justify-between items-center">
            <h1 class="text-3xl font-bold">FluentTalk Blog Panel</h1>
            <div id="auth-status" class="flex flex-wrap items-center space-x-4">
                <button id="logout-button" onClick={(e)=>navigate('/')} class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">go back</button>
            </div>
        </div>
    </header>
    <BlogSection/>
        </>
    )
}
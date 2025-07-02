// src/components/AdminContent.js
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiGet, apiPost, removeToken } from '../services/apiRequestResponse';

// You will eventually move these into separate components
// and manage their state locally or with a context/redux for larger apps.

// Mock data storage for demonstration purposes (will reset on page refresh)
const localStorageKey = 'mockAdminData';

function AdminContent() {
  // Featured Video Management
  const [featuredVideoUrl, setFeaturedVideoUrl] = useState('');
  const [featuredVideoMessage, setFeaturedVideoMessage] = useState('');
  const [featuredVideoMessageType, setFeaturedVideoMessageType] = useState('');

  // Blog Post Management
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [addBlogMessage, setAddBlogMessage] = useState('');
  const [addBlogMessageType, setAddBlogMessageType] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);

  // Edit Blog Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editBlogId, setEditBlogId] = useState(null);
  const [editBlogTitle, setEditBlogTitle] = useState('');
  const [editBlogContent, setEditBlogContent] = useState('');
  const [editBlogMessage, setEditBlogMessage] = useState('');
   const [imagePreviewUrl, setImagePreviewUrl] = useState("https://placehold.co/400x300/e0e0e0/808080?text=Image+Preview");
    // State to hold the alt text for the image preview
    const [imageAltText, setImageAltText] = useState("Image Preview");
  const [editBlogMessageType, setEditBlogMessageType] = useState('');
    const navigate=useNavigate();
    const formik=useFormik({
      initialValues:{
        title:'',
        content:'',
        image:'',
      },
      onSubmit:(values)=>{
        values.image=imagePreviewUrl;
        console.log(values);
        const postBlog=async ()=>{
          try{
            const res=await apiPost('/blogdata',values)
            console.log(res);
            navigate('/')
          }
          catch(err)
          {
            console.log(err);
          }
        }
        postBlog();
      }
    })
  // Load initial data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
      const data = JSON.parse(storedData);
      setFeaturedVideoUrl(data.featuredVideoUrl || '');
      setBlogPosts(data.blogPosts || []);
    } else {
      setFeaturedVideoMessage('No featured video set yet.');
      setFeaturedVideoMessageType('gray');
      // set blogPosts to empty array already set by default
    }
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    const dataToStore = {
      featuredVideoUrl: featuredVideoUrl,
      blogPosts: blogPosts,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(dataToStore));
    localStorage.setItem('videoUrl',featuredVideoUrl)
  }, [featuredVideoUrl, blogPosts]);

  // Featured Video Handlers
  const handleUpdateFeaturedVideo = () => {
    setFeaturedVideoMessage('');
    setFeaturedVideoMessageType('');

    if (!featuredVideoUrl.trim()) {
      setFeaturedVideoMessage('Please enter a YouTube video URL.');
      setFeaturedVideoMessageType('error');
      return;
    }

    const videoIdMatch = featuredVideoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    console.log(videoIdMatch);
    if (!videoIdMatch || !videoIdMatch[1]) {
      setFeaturedVideoMessage('Invalid YouTube URL. Please enter a valid link.');
      setFeaturedVideoMessageType('error');
      return;
    }

    // Simulate saving (just updates state and local storage)
    const addURl=async ()=>{
        try{
          const res=await apiPost('/url',{url:featuredVideoUrl});
          console.log(res);
          setFeaturedVideoMessage('Featured video URL updated successfully!');
          setFeaturedVideoMessageType('success');
          navigate('/');
        }
        catch(err){
          console.log(err);
        }
    }
    addURl();
    console.log("Simulated update featured video:", featuredVideoUrl);
  };

  // Blog Post Handlers
  const handleAddBlogPost = (e) => {
    e.preventDefault();
    setAddBlogMessage('');
    setAddBlogMessageType('');

    if (!blogTitle.trim() || !blogContent.trim()) {
      setAddBlogMessage('Please fill in both title and content.');
      setAddBlogMessageType('error');
      return;
    }

    const newPost = {
      id: Date.now().toString(), // Simple unique ID
      title: blogTitle.trim(),
      content: blogContent.trim(),
      timestamp: Date.now(),
      authorEmail: 'admin@example.com', // Mock author
    };

    setBlogPosts(prevPosts => [newPost, ...prevPosts]); // Add to the beginning
    setAddBlogMessage('Blog post added successfully (simulated)!');
    setAddBlogMessageType('success');
    setBlogTitle('');
    setBlogContent('');
    console.log("Simulated add blog post:", newPost);
  };

  const openEditBlogModal = (id) => {
    const postToEdit = blogPosts.find(post => post.id === id);
    if (postToEdit) {
      setEditBlogId(id);
      setEditBlogTitle(postToEdit.title);
      setEditBlogContent(postToEdit.content);
      setEditBlogMessage('');
      setEditBlogMessageType('');
      setIsEditModalOpen(true);
    }
  };

  const handleEditBlogPost = (e) => {
    e.preventDefault();
    setEditBlogMessage('');
    setEditBlogMessageType('');

    if (!editBlogTitle.trim() || !editBlogContent.trim()) {
      setEditBlogMessage('Please fill in both title and content.');
      setEditBlogMessageType('error');
      return;
    }

    setBlogPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === editBlogId
          ? { ...post, title: editBlogTitle.trim(), content: editBlogContent.trim(), lastUpdated: Date.now() }
          : post
      )
    );
    setEditBlogMessage('Blog post updated successfully (simulated)!');
    setEditBlogMessageType('success');
    setIsEditModalOpen(false);
    console.log("Simulated update blog post:", editBlogId);
  };

  const handleDeleteBlogPost = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post (simulated)?')) {
      setBlogPosts(prevPosts => prevPosts.filter(post => post.id !== id));
      console.log("Simulated delete blog post:", id);
    }
  };
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        // Check if file size is under 1 MB (1 MB = 1048576 bytes)
        if (file.size > 1048576) {
            alert("File size exceeds 1 MB. Please select a smaller file.");
            return;
        }

        const reader = new FileReader(); // Create a new FileReader object

        // Set the onload event handler for the FileReader
        reader.onload = (e) => {
            // When the file is read, update the state with the new image URL and alt text
            setImagePreviewUrl(e.target.result);
            setImageAltText("Uploaded Image");
        };

        // Read the selected file as a Data URL (base64 encoded string)
        reader.readAsDataURL(file);
    } else {
        // If no file is selected, revert to the placeholder image
        setImagePreviewUrl("https://placehold.co/400x300/e0e0e0/808080?text=Image+Preview");
        setImageAltText("Image Preview");
    }
};

  return (
    <div id="admin-content">
      <header class="bg-indigo-700 sticky z-100 top-0 text-white shadow-md py-4 px-6 md:px-8 lg:px-12 rounded-b-lg">
        <div class="container flex justify-between items-center">
            <h1 class="text-3xl font-bold">FluentTalk Admin</h1>
            <div id="auth-status" class="flex flex-wrap items-center space-x-4">
                <span id="user-email-display" class="font-medium">aditya@gmail.com</span>
                <button id="logout-button" onClick={(e)=>{removeToken();navigate('/');localStorage.removeItem('jwt')}} class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">Logout</button>
            </div>
        </div>
    </header>
      {/* Video Management */}
      <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Video Management</h2>
        <div className="mb-4">
          <label htmlFor="featured-video-url" className="block text-gray-700 text-sm font-medium mb-2">YouTube Video URL</label>
          <input
            type="url"
            id="featured-video-url"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="http://youtube.com/watch?v=dQw4w9WgXcQ"
            value={featuredVideoUrl}
            onChange={(e) => setFeaturedVideoUrl(e.target.value)}
          />
        </div>
        <button
          onClick={handleUpdateFeaturedVideo}
          className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out shadow-md"
        >
          Update Featured Video
        </button>
        {featuredVideoMessage && (
          <p className={`mt-3 text-sm ${featuredVideoMessageType === 'error' ? 'text-red-600' : featuredVideoMessageType === 'success' ? 'text-green-600' : 'text-gray-500'}`}>
            {featuredVideoMessage}
          </p>
        )}
      </section>

      {/* Blog Management */}
      <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Blog Post Management</h2>

        {/* Add New Blog Post Form */}
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Add New Blog Post</h3>
        <form onSubmit={formik.handleSubmit} className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="mb-4">
            <label htmlFor="blog-title" className="block text-gray-700 text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              id="blog-title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter blog post title"
              value={formik.values.title}
              name="title"
              onChange={formik.handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="blog-content" className="block text-gray-700 text-sm font-medium mb-2">Content (Markdown)</label>
            <textarea
              id="blog-content"
              name="content"
              rows="10"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your blog content here using Markdown..."
              value={formik.values.content}
              onChange={formik.handleChange}
              required
            ></textarea>
          </div>
          <div className='flex justify-between'>
          <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <label htmlFor="imageUpload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                        <svg className="w-16 h-16 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p className="text-gray-600 text-lg font-semibold mb-2">Drag & Drop or <span className="text-blue-600 hover:underline">Browse</span></p>
                        <p className="text-gray-500 text-sm">Image up to 1MB</p>
                    </div>
                </label>
                <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange} // Attach the change event handler
                />
            </div>

            {/* Image Preview Section */}
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden border border-gray-200 p-4">
                <img
                    id="imagePreview"
                    src={imagePreviewUrl} // Use state for the image source
                    alt={imageAltText}    // Use state for the alt text
                    className="max-w-full max-h-96 object-contain rounded-lg shadow-md"
                />
            </div>
            </div>
          <button
            type="submit"
            className="mt-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out shadow-md"
          >
            Add Blog Post
          </button>
          {addBlogMessage && (
            <p className={`mt-3 text-sm ${addBlogMessageType === 'error' ? 'text-red-600' : 'text-green-600'}`}>
              {addBlogMessage}
            </p>
          )}
        </form>

        {/* Existing Blog Posts List */}
        {/* <h3 className="text-xl font-semibold text-gray-700 mb-4">Existing Blog Posts</h3> */}
        {/* <div id="blog-posts-list" className="space-y-4">
          {blogPosts.length === 0 ? (
            <p id="no-blogs-message" className="text-gray-600">No blog posts found.</p>
          ) : (
            blogPosts.map(blog => (
              <div key={blog.id} className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex-grow mb-4 sm:mb-0">
                  <h4 className="text-lg font-semibold text-gray-800">{blog.title}</h4>
                  <p className="text-sm text-gray-600">Published: {new Date(blog.timestamp).toLocaleDateString()}</p>
                </div>
                <div className="flex space-x-3">
                  <button onClick={() => openEditBlogModal(blog.id)} className="edit-blog-button bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">Edit</button>
                  <button onClick={() => handleDeleteBlogPost(blog.id)} className="delete-blog-button bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">Delete</button>
                </div>
              </div>
            ))
          )}
        </div> */}
      </section>

      {/* Edit Blog Post Modal */}
      {/* {isEditModalOpen && (
        <div id="edit-blog-modal" className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <span className="close-button" onClick={() => setIsEditModalOpen(false)}>×</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Edit Blog Post</h2>
            <form onSubmit={handleEditBlogPost}>
              <input type="hidden" value={editBlogId} />
              <div className="mb-4">
                <label htmlFor="edit-blog-title" className="block text-gray-700 text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  id="edit-blog-title"
                  name="title"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={editBlogTitle}
                  onChange={(e) => setEditBlogTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="edit-blog-content" className="block text-gray-700 text-sm font-medium mb-2">Content (Markdown)</label>
                <textarea
                  id="edit-blog-content"
                  name="content"
                  rows="15"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={editBlogContent}
                  onChange={(e) => setEditBlogContent(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out shadow-md"
              >
                Save Changes
              </button>
              {editBlogMessage && (
                <p className={`mt-4 text-center text-sm ${editBlogMessageType === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                  {editBlogMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default AdminContent;
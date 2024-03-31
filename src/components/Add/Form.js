import React, { useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addNews, updateImageData } from '../../feature/formSlice';
import { Link, useNavigate } from 'react-router-dom';
//import { uploadNews } from './actions'; // Define your Redux action

const NewsForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: URL.createObjectURL(e.target.files[0])
    });
  };
  const handlePreview = ()=>{
    history('/preview',{state:formData})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNews(formData));
    history('/')
  };
  return (
    
    <div className='flex justify-center items-center'>
    <form method="POST" class="mx-16 px-16 my-4" onSubmit={handleSubmit}>
          <div class="space-y-5">
          <div>
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                News Title:{" "}
              </label>
              <div class="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  name="title"
                  placeholder="Name"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                News Category:{" "}
              </label>
              <div class="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Date:{" "}
              </label>
              <div class="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="date"
                  name="date"
                  placeholder="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label for="" class="text-base font-medium text-gray-900">
                  {" "}
                  Description:{" "}
                </label>
                
              </div>
              <div class="mt-2">
                <textarea cols={48} rows={5}
                className="rounded-md border w-full border-gray-300 px-2 py-1
                focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                />
              </div>
            </div>
            <div>
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                upload File:{" "}
              </label>
              <div class="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="file"
                  accept="image/*"
                  placeholder="Upload File"
                  //value={file}
                  //ref={fileInputRef}
                  onChange={handleImageChange}

                  //onChange={(e)=> setFile(fileInputRef.current.files[0])}
                  required
                />
              </div>
            </div>
            <div>
              <button
              onClick={handlePreview}
                className="inline-flex w-full items-center justify-center rounded-md bg-[#33c2e8] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#33c2e8]/80"
              >
                Preview{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
            <div>
              <button
              
                className="inline-flex w-full items-center justify-center rounded-md bg-[#33c2e8] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#33c2e8]/80"
              >
                Create{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </form>
        </div>
  );
};

// const mapDispatchToProps = {
//   uploadNews,
// };
export default NewsForm
// export default connect(null, mapDispatchToProps)(NewsForm);

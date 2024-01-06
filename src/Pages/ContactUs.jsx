import {
   AiTwotoneHome,
   AiOutlinePhone,
   AiOutlineMail,
   AiFillInfoCircle,
} from 'react-icons/ai';

const Contact = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
      // Your form submission logic can be added here
   };

   return (
      <>
         <div className='contact-wrapper bg-gray-100 py-10'>
            <form className='w-full' onSubmit={handleSubmit}>
               <div>
                  <iframe
                     src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6127.267625401169!2d77.45974882526681!3d28.63694985325516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee057557569f%3A0xa620a4ec7cbfb05e!2sLal%20Kuan%20Police%20Chowki!5e0!3m2!1sen!2sin!4v1699461509521!5m2!1sen!2sin'
                     width='100%'
                     height='450'
                     style={{ border: 0 }}
                     allowFullScreen=''
                     loading='lazy'
                     referrerPolicy='no-referrer-when-downgrade'
                     className='rounded-md overflow-hidden'
                  />
               </div>

               <div className='flex justify-around items-start mt-10'>
                  <div className='w-[50%]'>
                     <div className='bg-white p-8 rounded-md'>
                        <h3 className='text-3xl font-bold mb-6'>Contact</h3>
                        <div className='flex flex-col gap-6'>
                           <input
                              type='text'
                              className='border p-2 rounded-md'
                              placeholder='Enter Your Name'
                           />
                           <input
                              type='email'
                              className='border p-2 rounded-md'
                              placeholder='Enter Your Email'
                           />
                           <input
                              type='text'
                              className='border p-2 rounded-md'
                              placeholder='Enter Your Mobile-No'
                           />
                           <textarea
                              name=''
                              id=''
                              cols='30'
                              rows='10'
                              className='border p-2 rounded-md'
                              placeholder='Comment'
                           ></textarea>
                           <button
                              className='bg-blue-500 text-white py-2 rounded-md'
                              type='submit'
                           >
                              Send
                           </button>
                        </div>
                     </div>
                  </div>

                  <div className='w-[30%]'>
                     <div className='bg-white p-8 rounded-md h-full flex flex-col justify-between'>
                        <div>
                           <h3 className='text-3xl font-bold mb-6'>
                              Get in touch with us
                           </h3>
                           <ul className='list-none p-0'>
                              <li className='mb-3 flex items-start space-x-2'>
                                 <AiTwotoneHome size={'20px'} />
                                 <span className='align-top'>
                                    NH 24 Lal Kuan Ghaziabad
                                 </span>
                              </li>
                              <li className='mb-3 flex items-start space-x-2'>
                                 <AiOutlinePhone size={'20px'} />
                                 <a
                                    href='tel:+91 7065429235'
                                    className='text-blue-500'
                                 >
                                    +91 7065429235
                                 </a>
                              </li>
                              <li className='mb-3 flex items-start space-x-2'>
                                 <AiOutlineMail size={'20px'} />
                                 <a
                                    href='mailto:mritunjays447@gmail.com'
                                    className='text-blue-500'
                                 >
                                    mritunjays447@gmail.com
                                 </a>
                              </li>
                              <li className='mb-3 flex items-start space-x-2'>
                                 <AiFillInfoCircle size={'20px'} />
                                 <p>Monday - Friday 10AM - 10PM</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
};

export default Contact;

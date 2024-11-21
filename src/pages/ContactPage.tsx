// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin } from 'lucide-react';

// export default function ContactPage() {
//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="bg-purple-900 text-white py-20">
//         <div className="max-w-7xl mx-auto <boltAction type="file" filePath="src/pages/ContactPage.tsx">import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin } from 'lucide-react';

// export default function ContactPage() {
//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="bg-purple-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
//             <p className="text-xl text-purple-200 max-w-3xl mx-auto">
//               Get in touch with our team to discuss your project or inquiries.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="bg-white p-8 rounded-xl shadow-lg"
//             >
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
//               <form className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     rows={6}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </motion.div>

//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-8"
//             >
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <MapPin className="w-6 h-6 text-purple-600 mt-1" />
//                     <div className="ml-4">
//                       <h3 className="font-semibold text-gray-900">Address</h3>
//                       <p className="text-gray-600">
//                         123 Digital Street<br />
//                         Tech City, TC 12345
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <Phone className="w-6 h-6 text-purple-600 mt-1" />
//                     <div className="ml-4">
//                       <h3 className="font-semibold text-gray-900">Phone</h3>
//                       <p className="text-gray-600">(555) 123-4567</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <Mail className="w-6 h-6 text-purple-600 mt-1" />
//                     <div className="ml-4">
//                       <h3 className="font-semibold text-gray-900">Email</h3>
//                       <p className="text-gray-600">info@digitalagency.com</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Map */}
//               <div className="bg-gray-200 rounded-xl h-80">
//                 {/* Add your map integration here */}
//                 <div className="w-full h-full rounded-xl bg-gray-300"></div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }













import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Get in touch with our team to discuss your project or inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        123 Digital Street<br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-purple-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-purple-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@digitalagency.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-200 rounded-xl h-80">
                {/* Add your map integration here */}
                <div className="w-full h-full rounded-xl bg-gray-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

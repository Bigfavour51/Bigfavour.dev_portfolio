import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiClock, FiHeart, FiMessageCircle, FiShare2, FiPlay } from 'react-icons/fi';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const blogPosts = [
    {
      id: '1',
      title: 'Building My First STM32-Based IoT Weather Station',
      excerpt: 'Just completed an exciting project combining STM32 microcontrollers with cloud connectivity. Here\'s what I learned about sensor integration and real-time data transmission.',
      content: 'This week I wrapped up my latest project - a comprehensive weather monitoring system using STM32F4 microcontrollers. The system captures temperature, humidity, atmospheric pressure, and air quality data...',
      image: 'https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-159613.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: null,
      date: '2024-01-15',
      readTime: '5 min read',
      likes: 24,
      comments: 8,
      tags: ['STM32', 'IoT', 'Sensors', 'Cloud'],
      type: 'project'
    },
    {
      id: '2',
      title: 'Speaking at Lagos Tech Conference 2024',
      excerpt: 'Had an amazing time presenting "The Future of Embedded Systems in Nigeria" to 500+ attendees. The energy in the room was incredible!',
      content: 'What an incredible experience speaking at the Lagos Tech Conference! My talk on "The Future of Embedded Systems in Nigeria" resonated with so many engineers and students...',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: 'https://example.com/video1',
      date: '2024-01-10',
      readTime: '3 min read',
      likes: 45,
      comments: 12,
      tags: ['Conference', 'Speaking', 'Nigeria', 'Tech'],
      type: 'achievement'
    },
    {
      id: '3',
      title: 'Thoughts on the Future of Edge AI in Africa',
      excerpt: 'As I dive deeper into TinyML and edge computing, I can\'t help but think about the transformative potential for African industries. Here are my thoughts...',
      content: 'The intersection of AI and embedded systems is creating unprecedented opportunities, especially for emerging markets like those across Africa...',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: null,
      date: '2024-01-05',
      readTime: '7 min read',
      likes: 38,
      comments: 15,
      tags: ['AI', 'Edge Computing', 'Africa', 'Innovation'],
      type: 'thought'
    },
    {
      id: '4',
      title: 'Workshop Series: Teaching Embedded Systems to 50+ Students',
      excerpt: 'Wrapped up my 3-part embedded systems workshop series. Seeing students build their first blinking LED programs never gets old! 💡',
      content: 'This month I had the privilege of teaching embedded systems fundamentals to over 50 students across Lagos universities...',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: null,
      date: '2023-12-28',
      readTime: '4 min read',
      likes: 67,
      comments: 23,
      tags: ['Education', 'Workshop', 'Teaching', 'Students'],
      type: 'education'
    },
    {
      id: '5',
      title: 'New Certification: AWS IoT Core Specialist',
      excerpt: 'Just earned my AWS IoT Core certification! Ready to bridge the gap between embedded devices and cloud infrastructure even better.',
      content: 'Excited to share that I\'ve successfully completed the AWS IoT Core Specialty certification. This credential validates my expertise in...',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: null,
      date: '2023-12-20',
      readTime: '2 min read',
      likes: 29,
      comments: 6,
      tags: ['AWS', 'IoT', 'Certification', 'Cloud'],
      type: 'achievement'
    },
    {
      id: '6',
      title: 'Behind the Scenes: My Home Lab Setup',
      excerpt: 'A peek into my home laboratory where the magic happens. From oscilloscopes to 3D printers, here\'s how I\'ve set up my space for innovation.',
      content: 'Many of you have asked about my home lab setup, so I thought I\'d give you a virtual tour of where I develop and test all my embedded projects...',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: 'https://example.com/video2',
      date: '2023-12-15',
      readTime: '6 min read',
      likes: 52,
      comments: 18,
      tags: ['Home Lab', 'Setup', 'Tools', 'Workspace'],
      type: 'lifestyle'
    }
  ];

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const getTypeColor = (type: string) => {
    const colors = {
      project: 'bg-primary-500/20 text-primary-300',
      achievement: 'bg-secondary-500/20 text-secondary-300',
      thought: 'bg-purple-500/20 text-purple-300',
      education: 'bg-orange-500/20 text-orange-300',
      lifestyle: 'bg-green-500/20 text-green-300'
    };
    return colors[type as keyof typeof colors] || colors.project;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 section-padding bg-dark-800/50">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Updates</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing my journey, projects, thoughts, and experiences in embedded systems and tech innovation
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 card-hover"
            >
              {/* Post Header */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                {post.video && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
                      <FiPlay className="text-dark-900" size={24} />
                    </button>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(post.type)}`}>
                    {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <FiCalendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiClock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-dark-700">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-1 transition-colors ${
                        likedPosts.has(post.id)
                          ? 'text-red-400'
                          : 'text-gray-400 hover:text-red-400'
                      }`}
                    >
                      <FiHeart
                        size={16}
                        fill={likedPosts.has(post.id) ? 'currentColor' : 'none'}
                      />
                      <span className="text-sm">
                        {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                      </span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-primary-400 transition-colors">
                      <FiMessageCircle size={16} />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="text-gray-400 hover:text-secondary-400 transition-colors">
                      <FiShare2 size={16} />
                    </button>
                  </div>
                  <button className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            Load More Posts
          </button>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl border border-primary-500/20 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Stay Updated with My Journey
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Get notified about new projects, insights, and opportunities. 
            Join the community of innovators and embedded systems enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
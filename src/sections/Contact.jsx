import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import Button from"@/components/Button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tebbakhahlem@gmail.com",
    href: "",
  },
];

const Contact = () => {

const[formData,setFormData]=useState({
  name:"",
  email:"",
  message:""
})
const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
    
  }catch{}
}




  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/3 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100">
            Contact Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form action="" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2"> Name</label>
                <input  type="text"  id="name" required placeholder="your name" value={formData.name}
onChange={(e)=>setFormData({...formData,name:e.target.value})} className="w-full  px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary  outline-none transition-all "/>
              </div>

  <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2"> Email</label>
                <input type="email"  id="email" required placeholder="example@email.com" value={formData.email}
onChange={(e)=>setFormData({...formData,email: e.target.value})} className="w-full  px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary  outline-none transition-all "/>
              </div>
                <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2"> Message</label>
                <textarea rows={5} id="message" required placeholder="your message ..." className=" resize-none w-full  px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary  outline-none transition-all "/>
              </div>
              <Button className="w-full" type="submit" value={formData.message}
onChange={(e)=>setFormData({...formData,message: e.target.value})} > Send Message
                <Send/>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const SITE_KEY = '6LccujArAAAAAOFIe8prSJppEgRtOYdemyNThEW8'
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        reCaptchaVerified: false
    })

    const handleChange = (e) => {
        e.target.value,
            e.target.name

        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        })
    }

    const handleRecaptchaChange = (value) => {
        console.log(value)
        const isVerified = value ? true : false;
        setFormData({
            ...formData,
            reCaptchaVerified: isVerified
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.email == 'mitali@gmail.com')return;
        if(formData.password !='mit123') return;
        if(!formData.reCaptchaVerified) return;

    
    }

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit}>
                <h1 className="text-4xl text-center my-10">Login Form</h1>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="email">Enter Email</label>
                    <input type="text" name="email" id={`email`} className='text-xl border-2 border-gray-300 rounded-lg p-1' onChange={handleChange} value={formData.email} />
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="password">Enter Password</label>
                    <input type="password" name="password" id="password" className='text-xl border-2 border-gray-300 rounded-lg p-1' onChange={handleChange} value={formData.password} />
                </div>

                <div>
                    <ReCAPTCHA sitekey={SITE_KEY} onChange={handleRecaptchaChange} />
                </div>

                <div className=" flex jusrtify-center mb-4">
                    <button type="submit" className='bg-blue-400 hover:bg-blue-600 rounded-lg py-1 px-4'>Login</button>
                </div>
            </form>
        </div>
    )

}
export default Login
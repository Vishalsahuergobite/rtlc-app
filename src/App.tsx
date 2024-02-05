import React, { useEffect, useState } from 'react';

interface EmailValidationProps {
  initialEmail?: string;
  initialPassword?: string;

}

const App: React.FC<EmailValidationProps> = ({ initialEmail = '', initialPassword = '' }) => {

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  const [isValidFE, setisValidFE] = useState<boolean | null>(null);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [validate, setValidate] = useState<boolean | null>(null);

  const [submitted, setSubmitted] = useState<boolean | null>(null);


  // Password validation code 
  const validatePassword = (passwordToValidate: string): boolean => {
    return passwordToValidate.length >= 8;
  };


  const handleInputChangeFP = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValid(validatePassword(newPassword));
  };


  // Email validation code 
  const validateEmail = (emailToValidate: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailToValidate);
  };

  // Email onchange function 
  const handleInputChangeFE = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setisValidFE(validateEmail(newEmail));
  };


  useEffect(() => {
    if (isValid && isValidFE) {
      setValidate(true)
    } else {
      setValidate(false)

    }
  }, [isValid, isValidFE])

  const submit = () => {
    if (email && password && isValid && isValidFE) {
      setSubmitted(true)
    }else{
      setSubmitted(false)

    }
  }

  return (
    <>
      <div className=''>

        <h1 className="text-lg lg:text-3xl font-bold underline text-center mt-10">
          REACT TYPESCRIPT LOGIN COMPONENT
        </h1>

       { submitted ?
       <h1 className='text-[green] text-center flex justify-center items-center h-[80vh] text-lg lg:text-3xl font-bold'>
        Form Submitted successfully
       </h1>
        :
       <section className="-mt-[10]">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" onChange={(e) => handleInputChangeFE(e)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" />
                  </div>

                  {isValidFE !== null && (
                    <div style={{ color: isValidFE ? 'green' : 'red' }}>
                      {isValidFE ? 'Email is valid' : 'Email is not valid'}
                    </div>
                  )}

                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" onChange={(e) => handleInputChangeFP(e)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>

                  {isValid !== null && (
                    <div style={{ color: isValid ? 'green' : 'red' }}>
                      {isValid ? 'Password is valid' : 'Password should have at least 8 characters'}
                    </div>
                  )}

                  <button type='submit' onClick={submit} className={"lg:w-full border w-[60%] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" + ` ${validate ? '' : 'pointer-events-none'} `}>SUBMIT</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>}


      </div>
    </>
  )
}

export default App

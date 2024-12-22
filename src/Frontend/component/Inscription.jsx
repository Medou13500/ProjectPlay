import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
const FormulaireInscription = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/film")
    }
    const Schema = Yup.object().shape({
        email: Yup.string()
            .email("L'adresse mail n'est pas valide")
            .required("L'adresse email est obligatoire"),
        password: Yup.string()
            .min(8, "Le mot de passe doit contenir 8 caractères minimum")
            .matches(/^[A-Z](?=.*\d)(?=.*[@$!%*?&]).*$/, "Le mot de passe doit commencer par une majuscule, contenir un chiffre et un caractère spécial")
            .required("Le mot de passe est obligatoire"),
    });

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className='text-center'>Inscription</h2>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Schema}
                onSubmit={(values) => {
                    console.log('Form data', values);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <Field name="email" type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            <ErrorMessage name="email" component="div" className="mt-2 text-sm text-red-600" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                            <Field name="password" type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            <ErrorMessage name="password" component="div" className="mt-2 text-sm text-red-600" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Confirmation Mots de passe</label>
                            <Field name="password" type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            <ErrorMessage name="password" component="div" className="mt-2 text-sm text-red-600" />
                        </div>
                        <button type="submit" disabled={isSubmitting} onClick={handleClick} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Envoyer
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormulaireInscription;

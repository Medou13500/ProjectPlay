import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const FormulaireConnexion = () => {
    const navigate = useNavigate();
    const [authError, setAuthError] = useState(null);

    // Définition des règles de validation avec Yup
    const Schema = Yup.object().shape({
        email: Yup.string()
            .email("L'adresse mail n'est pas valide")
            .required("L'adresse email est obligatoire"),
        password: Yup.string()
            .min(8, "Le mot de passe doit contenir au moins 8 caractères")
            .matches(
                /^[A-Z](?=.*\d)(?=.*[@$!%*?&]).*$/,
                "Le mot de passe doit commencer par une majuscule, contenir un chiffre et un caractère spécial"
            )
            .required("Le mot de passe est obligatoire"),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        setAuthError(null);

        try {

            await new Promise((resolve) => setTimeout(resolve, 1000));
            navigate('/film');
        } catch (error) {
            console.error("Erreur d'authentification :", error);
            setAuthError("Échec de la connexion. Veuillez vérifier vos identifiant.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-center text-2xl font-semibold mb-6">Connexion</h2>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Schema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <Field
                                name="email"
                                type="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage name="email" component="div" className="mt-2 text-sm text-red-600" />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Mot de passe
                            </label>
                            <Field
                                name="password"
                                type="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage name="password" component="div" className="mt-2 text-sm text-red-600" />
                        </div>

                        {authError && (
                            <div className="text-red-600 text-sm mt-2">
                                {authError}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                                isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            {isSubmitting ? 'En cours...' : 'Envoyer'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormulaireConnexion;

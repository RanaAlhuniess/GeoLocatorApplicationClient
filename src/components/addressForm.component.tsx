import React, { useState } from 'react';

const AddressFormComponent: React.FC = () => {
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const handleAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Code to handle form submission
        console.log('Form submitted:', address, email);
    };

    return (
        <div className="address-form animated fadeInDown">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder="Address" value={address} onChange={handleAddressInputChange} required />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" value={email} onChange={handleEmailInputChange} required />
                    </div>
                    <button className="btn btn-block" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddressFormComponent;

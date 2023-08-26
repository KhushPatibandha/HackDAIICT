import React, { useState } from 'react';
import PrescriptionFields from './PrescriptionFields';

const CreateForm = () => {
  const [formData, setFormData] = useState({
    uniqueId: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    age: '',
    sex: '', // Updated to include 'sex' field
    prevailingIllness: '',
    prescriptions: [],
  });

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handlePrescriptionChange = (index, prescription) => {
    const updatedPrescriptions = [...formData.prescriptions];
    updatedPrescriptions[index] = prescription;

    setFormData(prevData => ({
      ...prevData,
      prescriptions: updatedPrescriptions,
    }));
  };

  const handleAddPrescription = () => {
    setFormData(prevData => ({
      ...prevData,
      prescriptions: [...prevData.prescriptions, { medicineName: '', dosage: [] }],
    }));
  };

  return (
    <div>
      <h2>New Patient Registration</h2>
      <input
        type="text"
        placeholder="Unique ID"
        value={formData.uniqueId}
        onChange={e => handleInputChange('uniqueId', e.target.value)}
      />
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={e => handleInputChange('firstName', e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={e => handleInputChange('lastName', e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={e => handleInputChange('phoneNumber', e.target.value)}
      />
      <label>
        Sex:
        <input
          type="radio"
          name="sex"
          value="male"
          checked={formData.sex === 'male'}
          onChange={() => handleInputChange('sex', 'male')}
        />
        Male
        <input
          type="radio"
          name="sex"
          value="female"
          checked={formData.sex === 'female'}
          onChange={() => handleInputChange('sex', 'female')}
        />
        Female
        <input
          type="radio"
          name="sex"
          value="others"
          checked={formData.sex === 'others'}
          onChange={() => handleInputChange('sex', 'others')}
        />
        Others
      </label>
      <textarea
        placeholder="Prevailing Illness"
        value={formData.prevailingIllness}
        onChange={e => handleInputChange('prevailingIllness', e.target.value)}
      />
      {/* ... Other input fields ... */}
      
      <PrescriptionFields
        prescriptions={formData.prescriptions}
        onPrescriptionChange={handlePrescriptionChange}
      />
      
      <button onClick={handleAddPrescription}>Add Prescription</button>
      
      <button>Submit</button>
    </div>
  );
};

export default CreateForm;

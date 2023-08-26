import React from 'react';

const PrescriptionFields = ({ prescriptions, onPrescriptionChange }) => {
  const handleDosageChange = (prescriptionIndex, dosageIndex, dosage) => {
    const updatedPrescription = { ...prescriptions[prescriptionIndex] };
    updatedPrescription.dosage[dosageIndex] = dosage;
    onPrescriptionChange(prescriptionIndex, updatedPrescription);
  };

  return (
    <div>
      {prescriptions.map((prescription, prescriptionIndex) => (
        <div key={prescriptionIndex}>
          <input
            type="text"
            placeholder="Medicine Name"
            value={prescription.medicineName}
            onChange={e =>
              onPrescriptionChange(prescriptionIndex, {
                ...prescription,
                medicineName: e.target.value,
              })
            }
          />
          {/* ... Other prescription fields ... */}
          {prescription.dosage.map((dosage, dosageIndex) => (
            <div key={dosageIndex}>
              <input
                type="text"
                placeholder="Dosage"
                value={dosage.dosage}
                onChange={e =>
                  handleDosageChange(prescriptionIndex, dosageIndex, {
                    ...dosage,
                    dosage: e.target.value,
                  })
                }
              />
              {/* ... Other dosage fields ... */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrescriptionFields;

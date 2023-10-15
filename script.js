

 function getFormValuesAsArray(formId) {
        const form = document.getElementById(formId);
        const formData = new FormData(form);
        const valuesArray = [];
        let arraydata = [];

        formData.forEach((value) => {
         

          
            valuesArray.push(value);
          
        });

        return valuesArray;
      }
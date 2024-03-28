const textInput = document.getElementById('textInput');
        const emailInput = document.getElementById('emailInput');

        function validateUrl(input) {
            const urlPattern = /^(https?:\/\/)?([\w-]+\.)*[\w-]+(\.[a-z]{2,})+(\/[\w-./?%&=]*)?$/i;
            return urlPattern.test(input);
        }

        function validateEmail(input) {
            const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return emailPattern.test(input);
        }

        function setInputValidity(input, isValid) {
            input.classList.remove('valid', 'invalid');
            input.classList.add(isValid ? 'valid' : 'invalid');
        }

        textInput.addEventListener('input', function() {
            setInputValidity(textInput, validateUrl(textInput.value));
        });

        emailInput.addEventListener('input', function() {
            setInputValidity(emailInput, validateEmail(emailInput.value));
        });
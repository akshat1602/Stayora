(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    const controls = form.querySelectorAll('input, textarea, select')

    // Live validation on input
    controls.forEach(control => {
      control.addEventListener('input', () => {
        if (control.checkValidity()) {
          control.classList.remove('is-invalid')
          control.classList.add('is-valid')
        } else {
          control.classList.remove('is-valid')
          control.classList.add('is-invalid')
        }
      })
    })

    // On submit, show validation UI and block invalid submits
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')

      // Ensure classes reflect final validity state
      controls.forEach(control => {
        if (control.checkValidity()) {
          control.classList.remove('is-invalid')
          control.classList.add('is-valid')
        } else {
          control.classList.remove('is-valid')
          control.classList.add('is-invalid')
        }
      })
    }, false)
  })
})();
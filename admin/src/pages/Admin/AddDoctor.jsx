// ... (keep existing imports and state declarations)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (!docImg) {
        return toast.error('Image not selected')
      }

      const formData = new FormData()
      // ... (keep existing formData.append lines)

      const { data } = await axios.post(
        backendUrl + '/api/admin/add-doctor',
        formData,
        { headers: { Authorization: `Bearer ${aToken}` } }
      )

      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
        // Added these to fully reset form
        setSpeciality('General physician')
        setExperience('1 Year')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message)
    }
  }
// ... rest of the file
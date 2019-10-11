export default (field, onChange, month, year) => {
  onChange(field, `${month}, ${year}`)
}

/**
 * @param {Object} props
 * @param {Array} props.iterable
 * @param {Function} props.children 
 * 
 * @example
 * <List iterable={[1, 2, 3]}>
 *   {(item) => <p>{item}</p>}
 * </List>
 */
const List = ({ iterable, children }) => iterable.map(item => children(item))
export default List
```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    // Correct logic, uses functional update to avoid infinite loop.
    setCount(prevCount => prevCount + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```
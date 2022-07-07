import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import { getBuilding } from './store/building/action';
import { selectBuildingShape } from './store/building/selector';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, payload: buildingShape } =
    useSelector(selectBuildingShape);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchBuildingShape = async () => {
      dispatch(getBuilding(abortController.signal));
    };
    if (!buildingShape) {
      try {
        fetchBuildingShape();
      } catch (err) {
        console.error(err);
      }
    }
    return () => {
      abortController.abort();
    };
  }, []);

  console.log({
    isLoading,
    buildingShape,
  });

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <>loading ... </>
        ) : (
          <>
            <p>Elevators: {buildingShape?.elevators}</p>
            <p>Floors: {buildingShape?.floors}</p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

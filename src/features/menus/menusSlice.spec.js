import menuReducer, { 
  addMenu, 
  getMenu, 
  getMenuSuccess, 
  getMenuFailure 
} from './menusSlice';

describe('menu reducer', () => {
  const initialState = {
    menus: [],
    status: 'idle',
    error: null
  };
  it('should handle initial state', () => {
    expect(menuReducer(undefined, { type: 'unknown' })).toEqual({
      menus: [],
      status: 'idle',
      error: null
    });
  });
});
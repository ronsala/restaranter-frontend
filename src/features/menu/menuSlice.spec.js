import menuReducer, { 
  addMenu, 
  getMenu, 
  getMenuSuccess, 
  getMenuFailure 
} from './menuSlice';

describe('menu reducer', () => {
  const initialState = {
    loading: false,
    hasErrors: false,
    menus: [],
  };
  it('should handle initial state', () => {
    expect(menuReducer(undefined, { type: 'unknown' })).toEqual({
      loading: false,
      hasErrors: false,
      menus: [],
    });
  });
});
const useCustomHooks = () => {
  const toggleModalHandle = (tree, toggle) => {
    return { ...tree, showModal: toggle };
  };

  const updateratings = (tree, rating) => {
    const newRatings = ++tree.ratingsCount;
    const updatedArray = tree.ratingsArray.push(rating);
    return {
      ...tree,
      ratingsArray: updatedArray,
      ratingsCount: newRatings,
    };
  };

  return { toggleModalHandle, updateratings };
};

export default useCustomHooks;

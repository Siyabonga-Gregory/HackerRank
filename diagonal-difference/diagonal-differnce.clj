(defn diagonal [matrix] (map-indexed (fn [i row] (nth row i)) matrix))

(defn diagonalDifference [matrix]
  (let [primary-diagonal (diagonal matrix)
        secondary-diagonal (diagonal (reverse matrix))
        primary-sum (reduce + primary-diagonal)
        secondary-sum (reduce + secondary-diagonal)
        max-sum (max primary-sum secondary-sum)
        min-sum (min primary-sum secondary-sum)]
    (- max-sum min-sum)))
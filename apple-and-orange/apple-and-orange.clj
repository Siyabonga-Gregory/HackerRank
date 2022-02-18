(defn get-hit-total [distances tree-coord house-start house-end]
  (reduce
   (fn [total d]
     (let [fruit-coord (+ tree-coord d)
           did-hit? (and
                     (>= fruit-coord house-start)
                     (<= fruit-coord house-end))]
       (if did-hit? (inc total) total)))
   0
   distances))

(defn countApplesAndOranges [house-start house-end a-coord o-coord a-distances o-distances]
  (let [a-hit-total (get-hit-total a-distances a-coord house-start house-end)
        o-hit-total (get-hit-total o-distances o-coord house-start house-end)]
    (doseq [hit-total [a-hit-total o-hit-total]] (prn hit-total))))
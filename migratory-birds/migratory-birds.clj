(defn max-k [id-to-total]
  (let [max-total (apply max (vals id-to-total))]
    (->>  (filter
           (fn [id] (= max-total (id-to-total id)))
           (keys id-to-total))
          (apply min))))

(defn migratoryBirds [ids]
  (->>  (reduce
         (fn [ret id]
           (update ret id (fn [v] (if (ret id) (inc (ret id)) 1))))
         {}
         ids)
        max-k))
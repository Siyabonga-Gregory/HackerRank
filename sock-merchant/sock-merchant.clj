(defn sockMerchant [_ colors]
  (let [color-to-total
        (reduce
         (fn [ret color]
           (if (ret color)
             (update ret color inc)
             (assoc ret color 1)))
         {} colors)
        pairs-totals
        (map
         (fn [total]
           (if (= 0 (mod total 2))
             (/ total 2)
             (/ (dec total) 2)))
         (vals color-to-total))]
    pairs-totals))
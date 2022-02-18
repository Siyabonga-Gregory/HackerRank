(defn filtered-next-xs [divisor xs x-i]
  (let [x (nth xs x-i)]
    (->>  (subvec xs (inc x-i))
          (filter (fn [next-x] (= 0 (mod (+ x next-x) divisor)))))))

(defn divisibleSumPairs [_ divisor xs]
  (->>  (range (count xs))
        (reduce
         (fn [ret x-i]
           (->> (filtered-next-xs divisor xs x-i)
                count
                (+ ret)))
         0)))
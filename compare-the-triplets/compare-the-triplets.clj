(defn compareTriplets [xs ys]
  (reduce
   (fn [ret i]
     (let [[x-points y-points] ret
           x (nth xs i)
           y (nth ys i)
           is-a-point? (> x y)
           is-b-point? (< x y)]
       (cond
         is-a-point? [(inc x-points) y-points]
         is-b-point? [x-points (inc y-points)]
         :else ret)))
   [0 0]
   (range (count xs))))
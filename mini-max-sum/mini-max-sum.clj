(defn miniMaxSum [pos-ints]
  (let
   [sums (map (fn [p-int] (- (reduce + pos-ints) p-int)) pos-ints)
    {mini :mini max :max}
    (reduce
     (fn [{mini :mini max :max} sum]
       (cond
         (< sum mini) {:mini sum :max max}
         (> sum max) {:mini mini :max sum}
         :else {:mini mini :max max}))
     {:mini (first sums) :max (first sums)}
     sums)]
    (prn mini max)))
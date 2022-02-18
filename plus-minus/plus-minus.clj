(defn counters [ns]
  (reduce
   (fn [accum n]
     (let [{plus :plus, minus :minus, zero :zero} accum]
       (cond
         (pos? n) (merge accum {:plus (inc plus)})
         (neg? n) (merge accum {:minus (inc minus)})
         :else (merge accum {:zero (inc zero)}))))
   {:plus 0 :minus 0 :zero 0}
   ns))

(defn plusMinus [ns]
  (let [{plus :plus, minus :minus, zero :zero} (counters ns)
        length (count ns)]
    (doseq [counter [plus minus zero]] (println (double (/ counter length))))))
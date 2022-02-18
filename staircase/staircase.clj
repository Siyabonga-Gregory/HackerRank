(defn get-hashes [n]
  (map-indexed
   (fn [i _]
     (repeat (inc i) "#"))
   (range n)))

(defn staircase [n]
  (let [hashes (get-hashes n)]
    (doseq [i (range n)]
      (let [hashes-str (clojure.string/join (nth hashes i))
            spaces-length (- n (inc i))
            spaces-str (apply str (repeat spaces-length " "))
            ret (clojure.string/join [spaces-str hashes-str])]
        (println ret)))))

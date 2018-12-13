CSV.
  begin([
   ["Hello","World"],
   ["Paul","Earth"],
   ["Marvin","Mars"],
   ["Spock","Vulcan"]
         ]).
  table("output",{header:1,caption:"My First html5csv program"}).
  save("local/csvoutput").
  go();
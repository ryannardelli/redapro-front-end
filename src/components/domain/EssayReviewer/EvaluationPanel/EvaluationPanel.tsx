export function EvaluationPanel({ essay }: any) {

  const finalScore =
    (essay.c1 || 0) +
    (essay.c2 || 0) +
    (essay.c3 || 0) +
    (essay.c4 || 0) +
    (essay.c5 || 0);

  return (
    <aside className="w-full lg:w-[400px] border-t lg:border-l border-slate-200 bg-white overflow-y-auto p-6 space-y-8">

      <h2 className="text-xl font-bold border-b border-slate-100 pb-4">Critérios de Avaliação</h2>

      {[1, 2, 3, 4, 5].map(c => (
            <div key={c} className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-slate-700 text-sm">
                  Competência {c}
                </label>
                <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded">
                  200 pts
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="40"
                defaultValue={essay[`c${c}`] || 0}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          ))}

          <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
              Nota Final
            </p>
            <div className="text-4xl md:text-5xl font-black mt-2">
              {essay.note ?? finalScore}
              <span className="text-xl text-slate-500 font-normal">/1000</span>
            </div>
          </div>

          <div className="mt-6 p-4 md:p-6 bg-slate-50 rounded-xl border border-slate-200">
            <label className="block text-slate-700 font-semibold mb-2">
              Feedback
            </label>
            <textarea
              rows={4}
              defaultValue={essay.feedback?.general || ""}
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm"
              placeholder="Escreva aqui seu feedback..."
            />
          </div>

    </aside>
  );
}


//         <aside className="w-full lg:w-[400px] border-t lg:border-l border-slate-200 bg-white overflow-y-auto p-6 space-y-8">
//           <h2 className="text-xl font-bold border-b border-slate-100 pb-4">
//             Critérios de Avaliação
//           </h2>

//           {[1, 2, 3, 4, 5].map(c => (
//             <div key={c} className="space-y-3">
//               <div className="flex justify-between items-center">
//                 <label className="font-semibold text-slate-700 text-sm">
//                   Competência {c}
//                 </label>
//                 <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded">
//                   200 pts
//                 </span>
//               </div>
//               <input
//                 type="range"
//                 min="0"
//                 max="200"
//                 step="40"
//                 defaultValue={essay[`c${c}`] || 0}
//                 className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
//               />
//             </div>
//           ))}

//           <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white">
//             <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
//               Nota Final
//             </p>
//             <div className="text-4xl md:text-5xl font-black mt-2">
//               {essay.note ?? finalScore}
//               <span className="text-xl text-slate-500 font-normal">/1000</span>
//             </div>
//           </div>

//           <div className="mt-6 p-4 md:p-6 bg-slate-50 rounded-xl border border-slate-200">
//             <label className="block text-slate-700 font-semibold mb-2">
//               Feedback
//             </label>
//             <textarea
//               rows={4}
//               defaultValue={essay.feedback?.general || ""}
//               className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm"
//               placeholder="Escreva aqui seu feedback..."
//             />
//           </div>
//         </aside>